package com.jwj.service.impl;

import com.github.pagehelper.PageHelper;
import com.jwj.dao.ParkMapper;
import com.jwj.entity.Fuel;
import com.jwj.entity.FuelExample;
import com.jwj.entity.Park;
import com.jwj.entity.ParkExample;
import com.jwj.service.ParkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("parkService")
public class ParkServiceImpl implements ParkService {
    @Autowired
    ParkMapper parkMapper;

    @Override
    public int countByExample(ParkExample example) {

        return 0;
    }

    @Override
    public int deleteByExample(ParkExample example) {
        return 0;
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        int i = parkMapper.deleteByPrimaryKey(id);
        return i;
    }

    @Override
    public int insert(Park record) {
        int insert = parkMapper.insert(record);
        return insert;
    }

    @Override
    public int insertSelective(Park record) {
        int i = parkMapper.insertSelective(record);
        return i;
    }

    @Override
    public List<Park> selectByExample(int page,int size) {
        PageHelper.startPage(page,size);
        ParkExample parkExample=new ParkExample();
        ParkExample.Criteria parkExampleCriteria = parkExample.createCriteria();
        parkExample.setDistinct(false);
        List<Park> parks = parkMapper.selectByExample(parkExample);
        return parks;
    }

    @Override
    public Park selectByPrimaryKey(Integer id) {
        Park park = parkMapper.selectByPrimaryKey(id);
        return park;
    }

    @Override
    public int updateByExampleSelective(Park record, ParkExample example) {
        return 0;
    }

    @Override
    public int updateByExample(Park record, ParkExample example) {
        return 0;
    }

    @Override
    public int updateByPrimaryKeySelective(Park record) {
        int i = parkMapper.updateByPrimaryKeySelective(record);
        return i;
    }

    @Override
    public int updateByPrimaryKey(Park record) {
        int i = parkMapper.updateByPrimaryKey(record);
        return i;
    }
}
