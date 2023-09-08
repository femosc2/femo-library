// utils/getPaths.ts
import fs from 'fs';
import path from 'path';

export async function getPaths(basePath: string): Promise<string[]> {
    const files = await fs.readdirSync(basePath);
    const paths = [];

    for (const file of files) {
        const filePath = path.join(basePath, file);
        const stats = await fs.statSync(filePath);

        if (stats.isDirectory()) {
            const nestedPaths = await getPaths(filePath);
            paths.push(...nestedPaths);
        } else {
            // Here you can filter files based on your criteria if needed.
            // For example, you may want to exclude certain files or file types.
            // You can use regex or other conditions to filter.
            paths.push(filePath);
        }
    }

    return paths;
}