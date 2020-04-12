package com.example.bezbednost.service;

import com.example.bezbednost.model.Admin;
import com.example.bezbednost.repository.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    private AdminRepo repo;



    public List<Admin> findall() {
        return repo.findAll();
    }

    public List<Admin> findAllByUsername(String email){
        return repo.findAllByUsername(email);
    }

    public Page<Admin> findAll(Pageable page) {
        return repo.findAll(page);
    }

    public boolean addAdmin(Admin p){
        List<Admin> tmp = findall();
        if(tmp.size() == 0) {
            repo.save(p);
            return true;
        }
        for(Admin p1 : tmp)
            if(p1.getUsername().equals(p.getUsername())) {
                return  false;
            }
            else {
                repo.save(p);
                return true;
            }
        return false;
    }

    public Admin getAdmin(String username){
        List<Admin> tmp = findall();
        if(tmp.size() == 0)
            return null;

        for(Admin p : tmp)
        {
            if(p.getUsername().equals(username))
                return p;
        }

        return null;
    }
}
