package com.rdsystem.backend.repository;

import com.rdsystem.backend.entity.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VendorRepository extends JpaRepository<Vendor, Long> {
}
