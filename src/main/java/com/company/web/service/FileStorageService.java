package com.company.web.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileStorageService {

    private final String UPLOAD_DIR = "uploads/";

    public String saveFile(MultipartFile file) throws IOException {
        Files.createDirectories(Paths.get(UPLOAD_DIR));

        String filePath =
                UPLOAD_DIR + System.currentTimeMillis() + "_" + file.getOriginalFilename();

        Path path = Paths.get(filePath);
        Files.write(path, file.getBytes());

        return filePath;
    }
}
