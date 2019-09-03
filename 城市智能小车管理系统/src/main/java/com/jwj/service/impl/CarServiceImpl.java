package com.jwj.service.impl;

import com.github.pagehelper.PageHelper;
import com.jwj.dao.CarMapper;
import com.jwj.entity.Car;
import com.jwj.entity.CarExample;
import com.jwj.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("carService")
public class CarServiceImpl implements CarService {

    @Autowired
    private CarMapper carMapper;

    @Override
    public int countByExample(CarExample example) {
        return 0;
    }

    @Override
    public int deleteByExample(CarExample example) {
        return 0;
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        int i = carMapper.deleteByPrimaryKey(id);
        return i;
    }

    @Override
    public int insert(Car record) {
        int insert = carMapper.insert(record);
        return insert;
    }

    @Override
    public int insertSelective(Car record) {
        int insert = carMapper.insertSelective(record);
        return insert;
    }

    @Override
    public List<Car> selectByExample() {
        CarExample carExample=new CarExample();
        CarExample.Criteria criteria = carExample.createCriteria();
        carExample.setDistinct(false);
        List<Car> cars = carMapper.selectByExample(carExample);
        return cars;
    }

    @Override
    public List<Car> selectByUserId(Integer user_id,Integer page,Integer size) {
        //参数pageNum是页码值 参数pageSize 代表的是每页显示条数
        PageHelper.startPage(page,size);
        CarExample carExample=new CarExample();
        CarExample.Criteria criteria = carExample.createCriteria();
        carExample.setDistinct(false);
        criteria.andUserIdEqualTo(user_id);
        List<Car> cars = carMapper.selectByExample(carExample);
        return cars;
    }

    @Override
    public Car selectByPrimaryKey(Integer id) {
        Car car = carMapper.selectByPrimaryKey(id);
        return car;
    }

    @Override
    public int updateByExampleSelective(Car record, CarExample example) {

        return 0;
    }

    @Override
    public int updateByExample(Car record, CarExample example) {

        return 0;
    }

    @Override
    public int updateByPrimaryKeySelective(Car record) {
        int i = carMapper.updateByPrimaryKeySelective(record);
        return i;
    }

    @Override
    public int updateByPrimaryKey(Car record) {
        int i = carMapper.updateByPrimaryKey(record);
        return i;
    }
}
