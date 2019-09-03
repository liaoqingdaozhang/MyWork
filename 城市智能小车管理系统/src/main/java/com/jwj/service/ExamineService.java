package com.jwj.service;

import com.jwj.entity.Examine;
import com.jwj.entity.ExamineExample;
import com.jwj.entity.IntList;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ExamineService {
    int countByExample(ExamineExample example);

    int deleteByExample(ExamineExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Examine record);

    int insertSelective(Examine record);

    List<Examine> selectByExample();

    List<Examine> selectByCarId(Integer integer);

    List<Examine> selectByListCarId(IntList integers);

    Examine selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Examine record, @Param("example") ExamineExample example);

    int updateByExample(@Param("record") Examine record, @Param("example") ExamineExample example);

    int updateByPrimaryKeySelective(Examine record);

    int updateByPrimaryKey(Examine record);
}
