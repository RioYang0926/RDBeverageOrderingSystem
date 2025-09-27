package com.rdsystem.backend.controller;

import com.rdsystem.backend.entity.Menu;
import com.rdsystem.backend.entity.MenuItem;
import com.rdsystem.backend.repository.MenuItemRepository;
import com.rdsystem.backend.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/menus")
public class MenuController {
    @Autowired
    private MenuRepository menuRepository;
    @Autowired
    private MenuItemRepository menuItemRepository;

    // 取得今日菜單
    @GetMapping("/today")
    public List<Menu> getTodayMenu() {
        return menuRepository.findByMenuDate(LocalDate.now());
    }

    // 依日期查詢菜單
    @GetMapping("/date/{date}")
    public List<Menu> getMenuByDate(@PathVariable String date) {
        return menuRepository.findByMenuDate(LocalDate.parse(date));
    }

    // 取得某菜單的所有飲料項目
    @GetMapping("/{menuId}/items")
    public List<MenuItem> getMenuItems(@PathVariable Long menuId) {
        return menuItemRepository.findByMenuId(menuId);
    }
}
