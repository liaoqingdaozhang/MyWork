package com.jwj.controller;

import com.github.pagehelper.PageInfo;
import com.jwj.entity.Examine;
import com.jwj.entity.IntList;
import com.jwj.service.ExamineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/examine")
public class ExamineController {
    @Autowired
    private ExamineService examineService;

    @RequestMapping("/insert")
    public int insert(@RequestBody Examine examine){
        if (examine.equals("")|| examine==null){
            return 0;
        }else {
            return examineService.insert(examine);
        }
    }

    @RequestMapping("/delete")
    public int delete(@RequestBody Examine examine){
        if (examine.equals("")||examine==null||examine.getId().equals("")){
            return 0;
        }else {
            return examineService.deleteByPrimaryKey(examine.getId());
        }
    }

    @RequestMapping("/bycarid")
    public  List<Examine>  carbycarid(@RequestBody  Examine examine){
        if (examine.equals("")||examine==null||examine.getCarId().equals("")){
            return null;
        }else {
            return examineService.selectByCarId(examine.getCarId());
        }
    }

    @RequestMapping("/bylistcarid")
    public PageInfo carbylistcarid(@RequestBody IntList intlist){
        if (intlist.equals("")){
            return null;
        }else if(intlist.getIntegers().size()<=0){
            return null;
        }else if(intlist==null){
            return null;
        }
        else {
            List<Examine> examines = examineService.selectByListCarId(intlist);
            PageInfo pageInfo=new PageInfo(examines);
            return pageInfo;
        }
    }

    @RequestMapping("/selectall")
    public List<Examine> list(){
        List<Examine> cars = examineService.selectByExample();
        return cars;
    }

    @RequestMapping("/byid")
    public Examine carbyid(@RequestBody  Examine examine){
        if (examine.equals("")||examine==null||examine.getId().equals("")){
            return null;
        }else {
            return examineService.selectByPrimaryKey(examine.getId());
        }
    }

    @RequestMapping("/update")
    public int examineupdate(@RequestBody Examine examine){
        if (examine.equals("")||examine==null||examine.getId().equals("")){
            return 0;
        }else {
            return examineService.updateByPrimaryKeySelective(examine);
        }
    }
}
