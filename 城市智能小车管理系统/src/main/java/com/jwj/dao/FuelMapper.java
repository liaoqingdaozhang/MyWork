package com.jwj.dao;

import com.jwj.entity.Fuel;
import com.jwj.entity.FuelExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface FuelMapper {
    int countByExample(FuelExample example);

    int deleteByExample(FuelExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Fuel record);

    int insertSelective(Fuel record);

    List<Fuel> selectByExample(FuelExample example);

    Fuel selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Fuel record, @Param("example") FuelExample example);

    int updateByExample(@Param("record") Fuel record, @Param("example") FuelExample example);

    int updateByPrimaryKeySelective(Fuel record);

    int updateByPrimaryKey(Fuel record);
}