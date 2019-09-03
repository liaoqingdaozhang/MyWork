package com.jwj.dao;

import com.jwj.entity.Examine;
import com.jwj.entity.ExamineExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ExamineMapper {
    int countByExample(ExamineExample example);

    int deleteByExample(ExamineExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Examine record);

    int insertSelective(Examine record);

    List<Examine> selectByExample(ExamineExample example);

    Examine selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Examine record, @Param("example") ExamineExample example);

    int updateByExample(@Param("record") Examine record, @Param("example") ExamineExample example);

    int updateByPrimaryKeySelective(Examine record);

    int updateByPrimaryKey(Examine record);
}