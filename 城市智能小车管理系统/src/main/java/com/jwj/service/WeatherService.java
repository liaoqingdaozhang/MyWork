package com.jwj.service;

import com.jwj.entity.Weather;
import com.jwj.entity.WeatherExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface WeatherService{
    int countByExample(WeatherExample example);

    int deleteByExample(WeatherExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Weather record);

    int insertSelective(Weather record);

    List<Weather> selectByExample();

    Weather selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Weather record, @Param("example") WeatherExample example);

    int updateByExample(@Param("record") Weather record, @Param("example") WeatherExample example);

    int updateByPrimaryKeySelective(Weather record);

    int updateByPrimaryKey(Weather record);
}
