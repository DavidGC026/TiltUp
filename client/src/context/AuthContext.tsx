import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "wouter";

interface User {
    id: number;
    username: string;
    role: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (key: string, value: string) => Promise<void>; // key/value generic for username/password or just accepts object
    logout: () => Promise<void>;
    checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [, setLocation] = useLocation();

    const checkAuth = async () => {
        try {
            const res = await fetch("/TiltUp/api/auth.php?action=user");
            if (res.ok) {
                const data = await res.json();
                setUser(data);
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error("Auth check failed", error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (username: string, password: string): Promise<void> => {
        const res = await fetch("/TiltUp/api/auth.php?action=login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.error || "Login failed");
        }

        // El backend debe setear la cookie de sesión o responder con éxito
        // Asumimos sesión basada en cookies
        setUser({
            id: data.id,
            username: data.username,
            role: data.role
        });
    };

    const logout = async () => {
        try {
            await fetch("/TiltUp/api/auth.php?action=logout", { method: "POST" });
            setUser(null);
            setLocation("/login");
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, checkAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
