package com.example.bezbednost.contoller;


import com.example.bezbednost.dto.LoginDTO;
import com.example.bezbednost.model.User;
import com.example.bezbednost.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpSession;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class LoginController{

    @Autowired
    UserService userService;


    @PostMapping(value = "/login", produces = MediaType.APPLICATION_JSON_VALUE)
    public String login(@RequestBody LoginDTO logindto)
    {
        User user = userService.findUserByUsername(logindto.getUsername());
        System.out.println(user.getUsername());
        if(user != null)
        {
            if(logindto.getPassword().equals(user.getPassword()))
            {
                ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
                HttpSession session = attributes.getRequest().getSession(true);
                session.setAttribute("user", user.getUsername());
                System.out.println(user.getPassword());

                return "User is logged in with username: " + user.getUsername();
            }
        }
        else
        {
            return "User is null";
        }

        return "";
    }

    @PostMapping(value = "/logout", produces = MediaType.APPLICATION_JSON_VALUE)
    public String logout()
    {
        //System.out.println("Logout uslo");
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
        HttpSession session = attributes.getRequest().getSession(true);
        session.invalidate();
        return "Uspesan logout";
    }
}
