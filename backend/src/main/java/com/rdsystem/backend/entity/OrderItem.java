package com.rdsystem.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "order_items", schema = "rd_drinks")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "menu_item_id")
    private MenuItem menuItem;

    @Column(name = "drink_name")
    private String drinkName;

    private String toppings;
    private String sweetness;
    @Column(name = "ice_level")
    private String iceLevel;
    @Column(name = "buyer_name")
    private String buyerName;
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    // getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Order getOrder() { return order; }
    public void setOrder(Order order) { this.order = order; }
    public MenuItem getMenuItem() { return menuItem; }
    public void setMenuItem(MenuItem menuItem) { this.menuItem = menuItem; }
    public String getDrinkName() { return drinkName; }
    public void setDrinkName(String drinkName) { this.drinkName = drinkName; }
    public String getToppings() { return toppings; }
    public void setToppings(String toppings) { this.toppings = toppings; }
    public String getSweetness() { return sweetness; }
    public void setSweetness(String sweetness) { this.sweetness = sweetness; }
    public String getIceLevel() { return iceLevel; }
    public void setIceLevel(String iceLevel) { this.iceLevel = iceLevel; }
    public String getBuyerName() { return buyerName; }
    public void setBuyerName(String buyerName) { this.buyerName = buyerName; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
