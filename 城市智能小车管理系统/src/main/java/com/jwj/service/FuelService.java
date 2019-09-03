package com.jwj.service;

import com.jwj.entity.Fuel;
import com.jwj.entity.FuelExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface FuelService {
    int countByExample(FuelExample example);

    int deleteByExample(FuelExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Fuel record);

    int insertSelective(Fuel record);

    List<Fuel> selectByExample();

    List<Fuel> selectBycaid(Integer carid);

    Fuel selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Fuel record, @Param("example") FuelExample example);

    int updateByExample(@Param("record") Fuel record, @Param("example") FuelExample example);

    int updateByPrimaryKeySelective(Fuel record);

    int updateByPrimaryKey(Fuel record);
}
