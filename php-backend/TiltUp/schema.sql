-- Crear base de datos
CREATE DATABASE IF NOT EXISTS tiltuplearn;
USE tiltuplearn;

-- Tabla de módulos
CREATE TABLE IF NOT EXISTS modules (
    id VARCHAR(50) PRIMARY KEY,
    number INT NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    content LONGTEXT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    progress INT DEFAULT 0,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de secciones
CREATE TABLE IF NOT EXISTS sections (
    id VARCHAR(50) PRIMARY KEY,
    module_id VARCHAR(50) NOT NULL,
    type ENUM('diagnostic', 'presentation', 'infographic', 'data', 'evaluation') NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    pdf_url VARCHAR(255),
    `order` INT NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (module_id) REFERENCES modules(id) ON DELETE CASCADE,
    INDEX idx_module_id (module_id),
    INDEX idx_order (`order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insertar módulos de ejemplo
INSERT INTO modules (id, number, title, description, content, image_url, progress, completed) VALUES
('modulo-1', 1, 'Planificación y Diseño', 'Fundamentos de la planificación arquitectónica y diseño estructural para proyectos Tilt-Up. Aprende a crear planos técnicos y calcular especificaciones.', 'En este módulo aprenderás los conceptos fundamentales de la planificación y diseño en construcción Tilt-Up:\n\n• Introducción al sistema constructivo Tilt-Up\n• Análisis de sitio y condiciones del terreno\n• Diseño estructural de paneles prefabricados\n• Cálculo de cargas y especificaciones técnicas\n• Elaboración de planos arquitectónicos\n• Software de diseño asistido por computadora (CAD)\n• Normativas y códigos de construcción aplicables\n• Coordinación con ingenieros estructurales\n• Presupuestación inicial del proyecto\n\nObjetivos de aprendizaje:\n- Comprender los principios básicos del diseño Tilt-Up\n- Desarrollar habilidades en lectura e interpretación de planos\n- Aplicar normativas de construcción vigentes\n- Realizar cálculos estructurales básicos\n\nDuración estimada: 8 horas de estudio', '/generated_images/Planning_and_design_module_a2d487e6.png', 0, FALSE),
('modulo-2', 2, 'Cimentación y Losas', 'Técnicas de preparación del terreno, construcción de cimientos y losas de concreto. Incluye instalación de acero de refuerzo y procesos de vaciado.', 'Domina las técnicas esenciales de cimentación y construcción de losas:\n\n• Preparación y excavación del terreno\n• Diseño y construcción de sistemas de drenaje\n• Instalación de mallas de acero de refuerzo\n• Cálculo de especificaciones de concreto\n• Técnicas de vaciado y nivelación\n• Control de calidad del concreto\n• Curado adecuado de superficies\n• Juntas de construcción y expansión\n• Acabados superficiales de losas\n\nTemas especializados:\n- Refuerzo estructural con varillas corrugadas\n- Sistemas de tensado post-tensionado\n- Pruebas de resistencia del concreto\n- Prevención de fisuras y agrietamientos\n- Impermeabilización de cimientos\n\nHerramientas y equipamiento:\n- Mezcladoras de concreto\n- Vibradores y alisadoras\n- Equipos de medición y nivelación\n- Herramientas de corte y doblado de acero\n\nDuración estimada: 10 horas de estudio', '/generated_images/Foundation_and_slabs_module_3a63acb7.png', 0, FALSE),
('modulo-3', 3, 'Acabado del Edificio', 'Proceso completo de levantamiento de paneles Tilt-Up, instalación y acabados finales. Aprende sobre grúas, conexiones estructurales y detalles arquitectónicos.', 'Aprende el proceso completo de levantamiento y acabado de estructuras Tilt-Up:\n\n• Preparación de paneles prefabricados\n• Técnicas de izado con grúas especializadas\n• Sistemas de apuntalamiento temporal\n• Conexiones estructurales entre paneles\n• Sellado de juntas y acabados\n• Instalación de sistemas de fachada\n• Acabados arquitectónicos exteriores\n• Revestimientos y tratamientos superficiales\n• Control de calidad final\n\nProcesos de levantamiento:\n- Planificación logística del izado\n- Coordinación con operadores de grúa\n- Seguridad en operaciones de altura\n- Secuencia óptima de instalación\n- Ajustes y alineación de paneles\n\nAcabados especializados:\n- Texturas arquitectónicas en concreto\n- Tratamientos de color y pigmentación\n- Aislamiento térmico y acústico\n- Sistemas de impermeabilización\n- Instalación de ventanas y aberturas\n\nDuración estimada: 12 horas de estudio', '/generated_images/Building_finishing_module_e7bf71f0.png', 0, FALSE),
('modulo-4', 4, 'Formatos de Apoyo para Campo', 'Documentación técnica, reportes de obra y formatos de control de calidad. Gestión de proyectos y coordinación de equipos en campo.', 'Domina la documentación y gestión técnica de proyectos Tilt-Up:\n\n• Formatos de control de calidad en obra\n• Reportes diarios de avance de construcción\n• Documentación de procesos constructivos\n• Registros fotográficos y bitácora de obra\n• Gestión de recursos y materiales\n• Coordinación de equipos multidisciplinarios\n• Programación y cronogramas de trabajo\n• Control de costos y presupuestos\n• Normativas de seguridad industrial\n\nDocumentación técnica:\n- Formatos de inspección de materiales\n- Reportes de pruebas de concreto\n- Certificaciones de calidad\n- Minutas de reuniones técnicas\n- Órdenes de cambio y modificaciones\n\nGestión de proyecto:\n- Metodologías de planificación (CPM, PERT)\n- Software de gestión de construcción\n- Comunicación con stakeholders\n- Resolución de conflictos en obra\n- Entrega y cierre de proyectos\n\nSeguridad y cumplimiento:\n- Protocolos de seguridad en sitio\n- Equipos de protección personal (EPP)\n- Procedimientos de emergencia\n- Auditorías de seguridad\n\nDuración estimada: 8 horas de estudio', '/generated_images/Field_support_formats_module_4af6fe7b.png', 0, FALSE);

-- Insertar secciones para módulo 1
INSERT INTO sections (id, module_id, type, title, content, pdf_url, `order`, completed) VALUES
('sec-1-1', 'modulo-1', 'diagnostic', 'Evaluación Diagnóstico', 'Prueba de conocimientos previos sobre planificación y diseño Tilt-Up. Evalúa tu nivel inicial.', NULL, 1, FALSE),
('sec-1-2', 'modulo-1', 'presentation', 'Presentación Ejecutiva', 'Introducción a los conceptos fundamentales del sistema Tilt-Up. Visión general del proceso constructivo.', '/pdfs/modulo1/presentacionejecutiva.pdf', 2, FALSE),
('sec-1-3', 'modulo-1', 'infographic', 'Infografía', 'Representación visual del flujo de diseño y planificación. Diagramas interactivos del proceso.', '/pdfs/modulo1/infografia.pdf', 3, FALSE),
('sec-1-4', 'modulo-1', 'data', 'Dato en Concreto', 'Estadísticas, normas y especificaciones técnicas. Datos reales de proyectos Tilt-Up exitosos.', '/pdfs/modulo1/datoenconcreto.pdf', 4, FALSE),
('sec-1-5', 'modulo-1', 'evaluation', 'Evaluación Final', 'Examen comprensivo para evaluar el dominio de los conceptos del módulo.', NULL, 5, FALSE);
-- Migration to add exam_results table

CREATE TABLE IF NOT EXISTS `exam_results` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `exam_id` varchar(50) NOT NULL,
  `attempt_id` varchar(50) NOT NULL,
  `score` decimal(5,2) NOT NULL,
  `passed` tinyint(1) NOT NULL DEFAULT 0,
  `details` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `idx_exam_results_user` (`user_id`),
  KEY `idx_exam_results_exam` (`exam_id`),
  CONSTRAINT `fk_exam_results_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_exam_results_exam` FOREIGN KEY (`exam_id`) REFERENCES `exams` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
