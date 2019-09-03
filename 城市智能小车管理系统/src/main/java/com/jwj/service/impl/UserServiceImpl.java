package com.jwj.service.impl;

import com.github.pagehelper.PageHelper;
import com.jwj.dao.UserMapper;
import com.jwj.entity.Fuel;
import com.jwj.entity.FuelExample;
import com.jwj.entity.User;
import com.jwj.entity.UserExample;
import com.jwj.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("userService")
public class UserServiceImpl implements UserService {
    @Autowired
    UserMapper userMapper;

    @Override
    public int countByExample(UserExample example) {
        return 0;
    }

    @Override
    public int deleteByExample(UserExample example) {
        return 0;
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        int i = userMapper.deleteByPrimaryKey(id);
        return i;
    }

    @Override
    public int insert(User record) {
        int insert = userMapper.insert(record);
        return insert;
    }

    @Override
    public int insertSelective(User record) {
        int i = userMapper.insertSelective(record);
        return i;
    }

    @Override
    public List<User> selectByExample(int page,int size) {
        //参数pageNum是页码值 参数pageSize 代表的是每页显示条数
        PageHelper.startPage(page,size);
        UserExample userExample=new UserExample();
        UserExample.Criteria userExampleCriteria = userExample.createCriteria();
        userExample.setDistinct(false);
        List<User> users = userMapper.selectByExample(userExample);
        return users;
    }

    @Override
    public List<User> selectByUsername(String s) {
        UserExample userExample=new UserExample();
        UserExample.Criteria userExampleCriteria = userExample.createCriteria();
        userExample.setDistinct(false);
        userExampleCriteria.andUsernameEqualTo(s);
        List<User> users = userMapper.selectByExample(userExample);
        return users;
    }

    @Override
    public User selectByPrimaryKey(Integer id) {
        User user = userMapper.selectByPrimaryKey(id);
        return user;
    }

    @Override
    public int updateByExampleSelective(User record, UserExample example) {
        return 0;
    }

    @Override
    public int updateByExample(User record, UserExample example) {
        return 0;
    }

    @Override
    public int updateByPrimaryKeySelective(User record) {
        int i = userMapper.updateByPrimaryKeySelective(record);
        return i;
    }

    @Override
    public int updateByPrimaryKey(User record) {
        int i = userMapper.updateByPrimaryKey(record);
        return i;
    }
}
