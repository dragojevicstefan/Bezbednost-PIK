package com.example.bezbednost.service;

import com.example.bezbednost.model.User;
import com.example.bezbednost.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepo userRepo;

    public User findUserByUsername(String em){
        return userRepo.findByUsername(em);
    }
    public User save(User user){
        return userRepo.save(user);
    }
    public List<User> findall()
    {
        return userRepo.findAll();
    }

    public User getUser(String us){
        List<User> tmp = findall();
        if(tmp.size() == 0)
            return null;

        for(User u : tmp)
        {
            if(u.getUsername().equals(us))
                return u;
        }

        return null;
    }

    public boolean editUser(User u) {
        List<User> tmp = findall();
        if(tmp.size() == 0)
            return false;

        for(User u1 : tmp)
        {
            if(u.getUsername().equals(u1.getUsername())) {
                u1 = u;
                userRepo.save(u1);
                return true;
            }
        }

        return false;
    }
}
