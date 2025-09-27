package com.rdsystem.backend.controller;

import com.rdsystem.backend.entity.User;
import com.rdsystem.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> payload) {
        String username = payload.get("username");
        String password = payload.get("password");
        User user = userRepository.findByUsername(username);
        Map<String, Object> result = new HashMap<>();
        if (user != null && user.getPassword().equals(password)) {
            result.put("username", user.getUsername());
            result.put("role", user.getRole());
            return result;
        } else {
            throw new RuntimeException("登入失敗");
        }
    }
}
