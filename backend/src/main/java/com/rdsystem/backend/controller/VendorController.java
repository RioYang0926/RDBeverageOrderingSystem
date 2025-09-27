package com.rdsystem.backend.controller;

import com.rdsystem.backend.entity.Vendor;
import com.rdsystem.backend.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vendors")
public class VendorController {
    @Autowired
    private VendorRepository vendorRepository;

    // 取得所有廠家
    @GetMapping("")
    public List<Vendor> getAllVendors() {
        return vendorRepository.findAll();
    }

    // 新增廠家
    @PostMapping("")
    public Vendor createVendor(@RequestBody Vendor vendor) {
        return vendorRepository.save(vendor);
    }

    // 刪除廠家
    @DeleteMapping("/{id}")
    public void deleteVendor(@PathVariable Long id) {
        vendorRepository.deleteById(id);
    }
}
