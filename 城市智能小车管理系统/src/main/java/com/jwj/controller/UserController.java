package com.jwj.controller;

import com.github.pagehelper.PageInfo;
import com.jwj.entity.Park;
import com.jwj.entity.User;
import com.jwj.service.ParkService;
import com.jwj.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("/insert")
    public int insert(@RequestBody User user){
        if (user.equals("")|| user==null){
            return 0;
        }else {
            return userService.insert(user);
        }
    }

    @RequestMapping("/delete")
    public int delete(@RequestBody User user){
        if (user.equals("")||user==null||user.getId().equals("")){
            return 0;
        }else {
            return userService.deleteByPrimaryKey(user.getId());
        }
    }
    //查询所有订单未分页
//    @RequestMapping("/selectall")
//    public List<User> list(){
//        List<User> parks = userService.selectByExample();
//        return parks;
//    }
    //分页查询所有订单
    @RequestMapping(value = "/selectall")
    public PageInfo list(@RequestParam(name="page",required = true,defaultValue = "1")String page,@RequestParam(name="size",required = true,defaultValue = "2")String size){
        System.out.println("page"+page+"    size:"+size+"");
        List<User> parks = userService.selectByExample(Integer.parseInt(page),Integer.parseInt(size));
        //pageInfo就是一个分页的bean
        PageInfo pageInfo=new PageInfo(parks);
        return pageInfo;
    }

    @RequestMapping("/byid")
    public User carbyid(@RequestBody User user){
        System.out.println(user);
        if (user.equals("")||user==null||user.getId().equals("")){
            return null;
        }else {
            return userService.selectByPrimaryKey(user.getId());
        }
    }

    @RequestMapping("/update")
    public int userupdate(@RequestBody User user){
        if (user.equals("")||user==null||user.getId().equals("")){
            return 0;
        }else {
            return userService.updateByPrimaryKeySelective(user);
        }
    }

    @RequestMapping("/byusername")
    public User carbyusername(@RequestBody User user){
        if (user.equals("")||user==null||user.getUsername().equals("")){
            return null;
        }else {
            return userService.selectByUsername(user.getUsername()).get(0);
        }
    }

}
