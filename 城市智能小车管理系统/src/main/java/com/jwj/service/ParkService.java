package com.jwj.service;

import com.jwj.entity.Park;
import com.jwj.entity.ParkExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ParkService {
    int countByExample(ParkExample example);

    int deleteByExample(ParkExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Park record);

    int insertSelective(Park record);

    List<Park> selectByExample(int page,int size);

    Park selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Park record, @Param("example") ParkExample example);

    int updateByExample(@Param("record") Park record, @Param("example") ParkExample example);

    int updateByPrimaryKeySelective(Park record);

    int updateByPrimaryKey(Park record);
}
