package com.jwj.controller;

import com.github.pagehelper.PageInfo;
import com.jwj.entity.Car;
import com.jwj.entity.Money;
import com.jwj.entity.Moneyrecord;
import com.jwj.entity.User;
import com.jwj.service.CarService;
import com.jwj.service.MoneyrecordService;
import com.jwj.service.impl.CarServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.beans.Transient;
import java.util.List;

@RestController
@RequestMapping("/car")
public class CarController {
    @Autowired
    private CarService carService;
    @Autowired
    private MoneyrecordService moneyrecordService;

    @RequestMapping("/insert")
    public int insert(@RequestBody Car car){
        if (car.equals("")|| car==null){
            return 0;
        }else {
            return carService.insertSelective(car);
        }
    }

    @RequestMapping("/delete")
    public int delete(@RequestBody Car car){
        if (car.equals("")||car==null||car.getId().equals("")){
            return 0;
        }else {
            return carService.deleteByPrimaryKey(car.getId());
        }
    }

    @RequestMapping("/byuserid")
    public PageInfo  carbyuserid(@RequestParam(name="userid",required = true)String userid,@RequestParam(name="page",required = true,defaultValue = "1")String page,@RequestParam(name="size",required = true,defaultValue = "2")String size){
        if (userid.equals("")||userid==null||userid.equals("")){
            return null;
        }else {
            List<Car> parks = carService.selectByUserId(Integer.parseInt(userid),Integer.parseInt(page),Integer.parseInt(size));
            //pageInfo就是一个分页的bean
            PageInfo pageInfo=new PageInfo(parks);
            return pageInfo;
        }
    }

    @RequestMapping("/selectall")
    public List<Car> list(){
        List<Car> cars = carService.selectByExample();
        return cars;
    }

    @RequestMapping("/byid")
    public Car carbyid(@RequestBody Car car){
        if (car.equals("")||car==null||car.getId().equals("")){

            return null;
        }else {
            return carService.selectByPrimaryKey(car.getId());
        }
    }
    @RequestMapping("/update")
    public int carupdate(@RequestBody Car car){
        if (car.equals("")||car==null||car.getId().equals("")){

            return 0;
        }else {
            return carService.updateByPrimaryKeySelective(car);
        }
    }

    @Transactional
    @RequestMapping("/money")
    public int carbymoney(@RequestBody Money money){
        if (money.equals("")||money==null){
            return 0;
        }else {
            Car car = carService.selectByPrimaryKey(money.getCar_id());
            car.setBalance(car.getBalance()+money.getMoney());
            if (car.getBalance()>=0){
                Moneyrecord moneyrecord=new Moneyrecord();
                moneyrecord.setMoney(money.getMoney());
                moneyrecord.setTime(money.getDate());
                moneyrecord.setType(money.getType());
                moneyrecord.setCarId(money.getCar_id());
                moneyrecordService.insert(moneyrecord);
                return carService.updateByPrimaryKeySelective(car);
            }else {
                throw new RuntimeException();
            }
        }
    }
}
