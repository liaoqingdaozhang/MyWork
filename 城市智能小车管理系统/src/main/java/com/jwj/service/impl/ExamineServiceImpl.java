package com.jwj.service.impl;

import com.github.pagehelper.PageHelper;
import com.jwj.dao.ExamineMapper;
import com.jwj.entity.*;
import com.jwj.service.ExamineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("examineService")
public class ExamineServiceImpl implements ExamineService {

    @Autowired
    ExamineMapper examineMapper;

    @Override
    public int countByExample(ExamineExample example) {
        return 0;
    }

    @Override
    public int deleteByExample(ExamineExample example) {
        return 0;
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        int i = examineMapper.deleteByPrimaryKey(id);
        return i;
    }

    @Override
    public int insert(Examine record) {
        int insert = examineMapper.insert(record);
        return insert;
    }

    @Override
    public int insertSelective(Examine record) {
        int i = examineMapper.insertSelective(record);
        return i;
    }

    @Override
    public List<Examine> selectByExample() {
        ExamineExample examineExample=new ExamineExample();
        ExamineExample.Criteria criteria = examineExample.createCriteria();
        examineExample.setDistinct(false);

        List<Examine> examines = examineMapper.selectByExample(examineExample);
        return examines;
    }

    @Override
    public List<Examine> selectByCarId(Integer integer) {
        ExamineExample examineExample=new ExamineExample();
        ExamineExample.Criteria criteria = examineExample.createCriteria();
        examineExample.setDistinct(false);
        examineExample.setOrderByClause("year DESC");
        criteria.andCarIdEqualTo(integer);
        List<Examine> examines = examineMapper.selectByExample(examineExample);
        return examines;
    }

    @Override
    public List<Examine> selectByListCarId(IntList integers) {
        PageHelper.startPage(integers.getPage(),integers.getSize());
        ExamineExample examineExample=new ExamineExample();
        ExamineExample.Criteria criteria = examineExample.createCriteria();
        examineExample.setDistinct(false);
        examineExample.setOrderByClause("year DESC");
        criteria.andCarIdIn(integers.getIntegers());
        List<Examine> examines = examineMapper.selectByExample(examineExample);
        return examines;
    }

    @Override
    public Examine selectByPrimaryKey(Integer id) {
        Examine examine = examineMapper.selectByPrimaryKey(id);
        return examine;
    }

    @Override
    public int updateByExampleSelective(Examine record, ExamineExample example) {
        return 0;
    }

    @Override
    public int updateByExample(Examine record, ExamineExample example) {
        return 0;
    }

    @Override
    public int updateByPrimaryKeySelective(Examine record) {
        int i = examineMapper.updateByPrimaryKeySelective(record);
        return i;
    }

    @Override
    public int updateByPrimaryKey(Examine record) {
        int i = examineMapper.updateByPrimaryKey(record);
        return i;
    }
}
