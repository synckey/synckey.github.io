Title: A Misuse of Spark Broadcast 
Date: 2015-11-03
Tags: spark
Author: Andy
Place: Beijing

在写Spark的作业时，如果用到大的lookup table，可以将这个Map直接作为Function的成员变量，这种方案最简单，但是会导致Task的Deserialization时间边的很长，严重影响作业运行时间。Spark可以将一个变量广播并缓存到所有节点上，作为task运行的一个本地查找表。由于之前对Spark api不是很了解，所以就用以下的方式使用了查找表：

    :::java
    public class Test implements Function<String, Boolean> {
        
        private Map<String,String> lookupTable=new HashMap<String, String>();
        
        public Test(Broadcast<Map<String,String>> broadcast){
            this.lookupTable=broadcast.value();
        }
        public Boolean call(String line) throws Exception {
            if (this.lookupTable.containsKey(line)){
                return true;
            }
            return false;
        }
    }


结果发现task的序列化时间还是很长。事实上，这个类实在Driver上被实例化的，Test的成员变量`lookupTable`是要被序列化并奋发到worker的。改成如下
的代码，才能正确的使用spark的broadcast广播数据。

    :::java
    public class Test implements Function<String, Boolean> {
        private Broadcast<Map<String,String>> bLookupTable=null;
        public Test(Broadcast<Map<String,String>> broadcast){
            this.bLookupTable = broadcast;
        }

        @Override
        public Boolean call(String line) throws Exception {
            Map<String,String> lookupTable=this.bLookupTable.value();
            if (lookupTable.containsKey(line)){
                return true;
            }
            return false;
        }
    }