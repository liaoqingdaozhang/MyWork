package com.jwj.service;

import com.jwj.entity.Carbypark;
import com.jwj.entity.CarbyparkExample;
import com.jwj.entity.IntList;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface CarbyparkService {
    int countByExample(CarbyparkExample example);

    int deleteByExample(CarbyparkExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Carbypark record);

    int insertSelective(Carbypark record);

    List<Carbypark> selectByExample();

    List<Carbypark> selectByCarId(Integer carid);

    List<Carbypark> selectByListCarId(IntList carids);

    List<Carbypark> selectByParkId(Integer parkid);

    Carbypark selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Carbypark record, @Param("example") CarbyparkExample example);

    int updateByExample(@Param("record") Carbypark record, @Param("example") CarbyparkExample example);

    int updateByPrimaryKeySelective(Carbypark record);

    int updateByPrimaryKey(Carbypark record);
}
