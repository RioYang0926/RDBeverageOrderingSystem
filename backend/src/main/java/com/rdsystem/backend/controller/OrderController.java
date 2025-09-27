package com.rdsystem.backend.controller;

import com.rdsystem.backend.entity.Order;
import com.rdsystem.backend.entity.OrderItem;
import com.rdsystem.backend.repository.OrderItemRepository;
import com.rdsystem.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private OrderItemRepository orderItemRepository;

    // 查詢今日所有訂單
    @GetMapping("/today")
    public List<Order> getTodayOrders() {
        return orderRepository.findByOrderDate(LocalDate.now());
    }

    // 查詢指定日期所有訂單
    @GetMapping("/date/{date}")
    public List<Order> getOrdersByDate(@PathVariable String date) {
        return orderRepository.findByOrderDate(LocalDate.parse(date));
    }

    // 查詢某訂單的所有明細
    @GetMapping("/{orderId}/items")
    public List<OrderItem> getOrderItems(@PathVariable Long orderId) {
        return orderItemRepository.findByOrderId(orderId);
    }

    // 查詢某使用者的所有訂單
    @GetMapping("/user/{userId}")
    public List<Order> getOrdersByUser(@PathVariable Long userId) {
        return orderRepository.findByUserId(userId);
    }

    // 建立新訂單（含明細）
    @PostMapping("")
    public Order createOrder(@RequestBody Order order) {
        return orderRepository.save(order);
    }
}
