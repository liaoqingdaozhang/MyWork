package com.jwj.service.impl;

import com.jwj.dao.WeatherMapper;
import com.jwj.entity.User;
import com.jwj.entity.UserExample;
import com.jwj.entity.Weather;
import com.jwj.entity.WeatherExample;
import com.jwj.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("weatherService")
public class WeatherServiceImpl implements WeatherService {
    @Autowired
    WeatherMapper weatherMapper;

    @Override
    public int countByExample(WeatherExample example) {
        return 0;
    }

    @Override
    public int deleteByExample(WeatherExample example) {
        return 0;
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        int i = weatherMapper.deleteByPrimaryKey(id);
        return i;
    }

    @Override
    public int insert(Weather record) {
        int insert = weatherMapper.insert(record);
        return insert;
    }

    @Override
    public int insertSelective(Weather record) {
        int i = weatherMapper.insertSelective(record);
        return i;
    }

    @Override
    public List<Weather> selectByExample() {
        WeatherExample weatherExample=new WeatherExample();
        WeatherExample.Criteria weatherExampleCriteria = weatherExample.createCriteria();
        weatherExample.setDistinct(false);
        List<Weather> weathers = weatherMapper.selectByExample(weatherExample);
        return weathers;
    }

    @Override
    public Weather selectByPrimaryKey(Integer id) {
        Weather weather = weatherMapper.selectByPrimaryKey(id);
        return weather;
    }

    @Override
    public int updateByExampleSelective(Weather record, WeatherExample example) {
        return 0;
    }

    @Override
    public int updateByExample(Weather record, WeatherExample example) {
        return 0;
    }

    @Override
    public int updateByPrimaryKeySelective(Weather record) {
        int i = weatherMapper.updateByPrimaryKeySelective(record);
        return i;
    }

    @Override
    public int updateByPrimaryKey(Weather record) {
        int i = weatherMapper.updateByPrimaryKey(record);
        return i;
    }
}
