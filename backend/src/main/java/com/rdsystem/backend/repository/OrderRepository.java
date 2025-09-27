package com.rdsystem.backend.repository;

import com.rdsystem.backend.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByOrderDate(LocalDate orderDate);
    List<Order> findByUserId(Long userId);
}
