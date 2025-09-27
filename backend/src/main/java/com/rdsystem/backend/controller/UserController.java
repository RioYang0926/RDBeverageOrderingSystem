package com.rdsystem.backend.controller;

import com.rdsystem.backend.entity.User;
import com.rdsystem.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    // 查詢所有使用者（管理員用）
    @GetMapping("")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // 新增使用者（管理員用）
    @PostMapping("")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    // 刪除使用者（管理員用）
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }
}
