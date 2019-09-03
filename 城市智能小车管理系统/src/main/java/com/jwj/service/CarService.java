package com.jwj.service;

import com.jwj.entity.Car;
import com.jwj.entity.CarExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface CarService {

    int countByExample(CarExample example);

    int deleteByExample(CarExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Car record);

    int insertSelective(Car record);

    List<Car> selectByExample();

    List<Car> selectByUserId(Integer user_id,Integer page,Integer size);

    Car selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Car record, @Param("example") CarExample example);

    int updateByExample(@Param("record") Car record, @Param("example") CarExample example);

    int updateByPrimaryKeySelective(Car record);

    int updateByPrimaryKey(Car record);
}
