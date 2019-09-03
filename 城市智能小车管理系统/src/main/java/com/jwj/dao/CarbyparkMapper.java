package com.jwj.dao;

import com.jwj.entity.Carbypark;
import com.jwj.entity.CarbyparkExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface CarbyparkMapper {
    int countByExample(CarbyparkExample example);

    int deleteByExample(CarbyparkExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Carbypark record);

    int insertSelective(Carbypark record);

    List<Carbypark> selectByExample(CarbyparkExample example);

    Carbypark selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Carbypark record, @Param("example") CarbyparkExample example);

    int updateByExample(@Param("record") Carbypark record, @Param("example") CarbyparkExample example);

    int updateByPrimaryKeySelective(Carbypark record);

    int updateByPrimaryKey(Carbypark record);
}