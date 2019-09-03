package com.jwj.service.impl;

import com.github.pagehelper.PageHelper;
import com.jwj.dao.MoneyrecordMapper;
import com.jwj.entity.*;
import com.jwj.service.MoneyrecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("moneyrecordService")
public class MoneyrecordServiceImpl implements MoneyrecordService {
    @Autowired
    MoneyrecordMapper moneyrecordMapper;

    @Override
    public int countByExample(MoneyrecordExample example) {
        return 0;
    }

    @Override
    public int deleteByExample(MoneyrecordExample example) {
        return 0;
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        int i = moneyrecordMapper.deleteByPrimaryKey(id);
        return i;
    }

    @Override
    public int insert(Moneyrecord record) {
        int insert = moneyrecordMapper.insert(record);
        return insert;
    }

    @Override
    public int insertSelective(Moneyrecord record) {
        int i = moneyrecordMapper.insertSelective(record);
        return i;
    }

    @Override
    public List<Moneyrecord> selectByExample() {
        MoneyrecordExample moneyrecordExample=new MoneyrecordExample();
        MoneyrecordExample.Criteria moneyrecordExampleCriteria = moneyrecordExample.createCriteria();
        moneyrecordExample.setDistinct(false);
        List<Moneyrecord> moneyrecords = moneyrecordMapper.selectByExample(moneyrecordExample);
        return moneyrecords;
    }

    @Override
    public Moneyrecord selectByPrimaryKey(Integer id) {
        Moneyrecord moneyrecord = moneyrecordMapper.selectByPrimaryKey(id);
        return moneyrecord;
    }

    @Override
    public List<Moneyrecord> selectByCarId(Integer carId) {
        MoneyrecordExample moneyrecordExample=new MoneyrecordExample();
        MoneyrecordExample.Criteria criteria = moneyrecordExample.createCriteria();
        moneyrecordExample.setDistinct(false);
        criteria.andCarIdEqualTo(carId);
        List<Moneyrecord> cars = moneyrecordMapper.selectByExample(moneyrecordExample);
        return cars;
    }

    @Override
    public List<Moneyrecord> selectByListCarId(IntList intList) {
        PageHelper.startPage(intList.getPage(),intList.getSize());
        MoneyrecordExample moneyrecordExample=new MoneyrecordExample();
        MoneyrecordExample.Criteria criteria = moneyrecordExample.createCriteria();
        moneyrecordExample.setDistinct(false);
        moneyrecordExample.setOrderByClause("time DESC");
        criteria.andCarIdIn(intList.getIntegers());
        List<Moneyrecord> cars = moneyrecordMapper.selectByExample(moneyrecordExample);
        return cars;
    }

    @Override
    public int updateByExampleSelective(Moneyrecord record, MoneyrecordExample example) {
        return 0;
    }

    @Override
    public int updateByExample(Moneyrecord record, MoneyrecordExample example) {
        return 0;
    }

    @Override
    public int updateByPrimaryKeySelective(Moneyrecord record) {
        int i = moneyrecordMapper.updateByPrimaryKeySelective(record);
        return i;
    }

    @Override
    public int updateByPrimaryKey(Moneyrecord record) {
        int i = moneyrecordMapper.updateByPrimaryKey(record);
        return i;
    }
}
