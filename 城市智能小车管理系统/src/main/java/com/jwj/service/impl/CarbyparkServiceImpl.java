package com.jwj.service.impl;

import com.github.pagehelper.PageHelper;
import com.jwj.dao.CarbyparkMapper;
import com.jwj.entity.Carbypark;
import com.jwj.entity.CarbyparkExample;
import com.jwj.entity.IntList;
import com.jwj.service.CarbyparkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("carbyparkService")
public class CarbyparkServiceImpl implements CarbyparkService {
    @Autowired
    CarbyparkMapper carbyparkMapper;

    @Override
    public int countByExample(CarbyparkExample example) {
        return 0;
    }

    @Override
    public int deleteByExample(CarbyparkExample example) {
        return 0;
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        int i = carbyparkMapper.deleteByPrimaryKey(id);
        return i;
    }

    @Override
    public int insert(Carbypark record) {
        int insert = carbyparkMapper.insert(record);
        return insert;
    }

    @Override
    public int insertSelective(Carbypark record) {
        int i = carbyparkMapper.insertSelective(record);
        return i;
    }

    @Override
    public List<Carbypark> selectByExample(){
        CarbyparkExample carExample=new CarbyparkExample();
        CarbyparkExample.Criteria criteria = carExample.createCriteria();
        carExample.setDistinct(false);
        List<Carbypark> cars = carbyparkMapper.selectByExample(carExample);
        return cars;
    }

    @Override
    public List<Carbypark> selectByCarId(Integer carid) {
        CarbyparkExample carExample=new CarbyparkExample();
        CarbyparkExample.Criteria criteria = carExample.createCriteria();
        carExample.setDistinct(false);
        criteria.andCaridEqualTo(carid);
        List<Carbypark> cars = carbyparkMapper.selectByExample(carExample);
        return cars;
    }

    @Override
    public List<Carbypark> selectByListCarId(IntList carids) {
        PageHelper.startPage(carids.getPage(),carids.getSize());
        CarbyparkExample carExample=new CarbyparkExample();
        CarbyparkExample.Criteria criteria = carExample.createCriteria();
        carExample.setDistinct(false);
        criteria.andCaridIn(carids.getIntegers());
        List<Carbypark> cars = carbyparkMapper.selectByExample(carExample);
        return cars;
    }

    @Override
    public List<Carbypark> selectByParkId(Integer parkid) {
        CarbyparkExample carExample=new CarbyparkExample();
        CarbyparkExample.Criteria criteria = carExample.createCriteria();
        carExample.setDistinct(false);
        criteria.andParkidEqualTo(parkid);
        List<Carbypark> cars = carbyparkMapper.selectByExample(carExample);
        return cars;
    }

    @Override
    public Carbypark selectByPrimaryKey(Integer id) {
        Carbypark carbypark = carbyparkMapper.selectByPrimaryKey(id);
        return carbypark;
    }

    @Override
    public int updateByExampleSelective(Carbypark record, CarbyparkExample example) {
        return 0;
    }

    @Override
    public int updateByExample(Carbypark record, CarbyparkExample example) {
        return 0;
    }

    @Override
    public int updateByPrimaryKeySelective(Carbypark record) {
        int i = carbyparkMapper.updateByPrimaryKeySelective(record);
        return i;
    }

    @Override
    public int updateByPrimaryKey(Carbypark record) {
        int i = carbyparkMapper.updateByPrimaryKey(record);
        return i;
    }
}
