import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Verifica si se puede usar imagemin
try {
  // Intenta usar ffmpeg si está disponible
  const inputDir = './attached_assets/generated_images';
  const outputDir = './attached_assets/generated_images';

  if (!fs.existsSync(inputDir)) {
    console.log('Directorio no existe:', inputDir);
    process.exit(1);
  }

  const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.png'));
  
  console.log(`Encontradas ${files.length} imágenes para optimizar...`);
  
  files.forEach(file => {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    const stats = fs.statSync(inputPath);
    const sizeBefore = (stats.size / 1024 / 1024).toFixed(2);

    try {
      // Usar pngquant si está disponible para comprimir sin perder mucha calidad
      execSync(`pngquant --ext .png --force --quality=80-95 "${inputPath}"`, { stdio: 'inherit' });
      
      const statsAfter = fs.statSync(outputPath);
      const sizeAfter = (statsAfter.size / 1024 / 1024).toFixed(2);
      const reduction = (((stats.size - statsAfter.size) / stats.size) * 100).toFixed(1);
      
      console.log(`✓ ${file}: ${sizeBefore}MB → ${sizeAfter}MB (reducción: ${reduction}%)`);
    } catch (e) {
      console.log(`✗ No se pudo optimizar ${file} (pngquant no disponible)`);
      console.log('Instala: sudo apt-get install pngquant');
    }
  });
} catch (error) {
  console.error('Error:', error.message);
}
