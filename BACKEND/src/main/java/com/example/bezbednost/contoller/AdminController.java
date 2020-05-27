package com.example.bezbednost.contoller;

import com.example.bezbednost.model.Admin;
import com.example.bezbednost.service.AdminService;
import com.example.bezbednost.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = {"https://localhost:4200"})
public class AdminController {

    @Autowired
    private AdminService adminService;

    @Autowired
    private UserService userService;

    @GetMapping(value = "admin/all")
    public ResponseEntity<List<Admin>> all() {
        return new ResponseEntity<>(adminService.findall(), HttpStatus.OK);
    }

}
