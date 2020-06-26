package com.example.bezbednost.contoller;

import com.example.bezbednost.model.Log;
import com.example.bezbednost.model.LogType;
import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Array;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class LogController {

    @GetMapping("/test")
    public ResponseEntity<String> test(){
        return new ResponseEntity<>("OK", HttpStatus.OK);
    }

    @PostMapping("/api/log")
    public ResponseEntity<String> addLog(@RequestBody Log log) throws IOException {
        System.out.println("usao u log");
        File file = new File("log.txt");
        boolean append = true;
        //Check if file is bigger than 2MB
        if (file.length()  / (1024 * 1024) > 2)
        {
            //Create copy of log file
            Files.copy(file.toPath(), new File(UUID.randomUUID().toString()+".txt").toPath() );
            //Rewrite log file
            append = false;
        }
        PrintWriter pw = new PrintWriter(new FileWriter("log.txt", append));
        pw.write(String.valueOf(log));
        pw.close();

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/api/log/allLogs")
    public ResponseEntity<ArrayList<Log>> getLogs() throws IOException {
        ArrayList<Log> logs = Log.readLogs("log.txt");
        return new ResponseEntity<>(logs, HttpStatus.OK);
    }

    @GetMapping("/log/filter")
    public ResponseEntity<ArrayList<Log>> filterLogs(@RequestParam ArrayList<LogType> logTypes) throws IOException {
        ArrayList<Log> logs = Log.readLogs("log.txt");
        logs = logs.stream().filter(log -> logTypes.stream().anyMatch(logType -> log.getLogType() == logType)).collect(Collectors.toCollection(ArrayList::new));
        return new ResponseEntity<>(logs, HttpStatus.OK);
    }
}
