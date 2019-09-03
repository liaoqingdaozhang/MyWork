package com.jwj.service.impl;

import com.jwj.dao.FuelMapper;
import com.jwj.entity.Examine;
import com.jwj.entity.ExamineExample;
import com.jwj.entity.Fuel;
import com.jwj.entity.FuelExample;
import com.jwj.service.FuelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("fuelService")
public class FuelServiceImpl implements FuelService {
    @Autowired
    FuelMapper fuelMapper;

    @Override
    public int countByExample(FuelExample example) {
        return 0;
    }

    @Override
    public int deleteByExample(FuelExample example) {
        return 0;
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        int i = fuelMapper.deleteByPrimaryKey(id);
        return i;
    }

    @Override
    public int insert(Fuel record) {
        int insert = fuelMapper.insert(record);
        return insert;
    }

    @Override
    public int insertSelective(Fuel record) {
        int i = fuelMapper.insertSelective(record);
        return i;
    }

    @Override
    public List<Fuel> selectByExample() {
        FuelExample fuelExample=new FuelExample();
        FuelExample.Criteria fuelExampleCriteria = fuelExample.createCriteria();
        fuelExample.setDistinct(false);
        List<Fuel> fuels = fuelMapper.selectByExample(fuelExample);
        return fuels;
    }

    @Override
    public List<Fuel> selectBycaid(Integer carid) {
        FuelExample fuelExample=new FuelExample();
        FuelExample.Criteria fuelExampleCriteria = fuelExample.createCriteria();
        fuelExample.setDistinct(false);
        fuelExampleCriteria.andCarIdEqualTo(carid);
        List<Fuel> fuels = fuelMapper.selectByExample(fuelExample);
        return fuels;
    }

    @Override
    public Fuel selectByPrimaryKey(Integer id) {
        Fuel fuel = fuelMapper.selectByPrimaryKey(id);
        return fuel;
    }

    @Override
    public int updateByExampleSelective(Fuel record, FuelExample example) {
        return 0;
    }

    @Override
    public int updateByExample(Fuel record, FuelExample example) {
        return 0;
    }

    @Override
    public int updateByPrimaryKeySelective(Fuel record) {
        int i = fuelMapper.updateByPrimaryKeySelective(record);
        return i;
    }

    @Override
    public int updateByPrimaryKey(Fuel record) {
        int i = fuelMapper.updateByPrimaryKey(record);
        return i;
    }
}
