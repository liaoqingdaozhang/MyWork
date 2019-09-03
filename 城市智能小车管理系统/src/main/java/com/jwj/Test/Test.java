package com.jwj.Test;

import com.jwj.entity.Car;
import jdk.nashorn.internal.runtime.linker.LinkerCallSite;

import javax.sql.rowset.CachedRowSet;
import java.util.ArrayList;
import java.util.List;

public class Test {
    @org.junit.Test
    public void test(){
        List<String> strings=new ArrayList<>();
        strings.add("1");

        List<String> strings1=strings;

        String  s="123";
        int i=1;
    }
}
