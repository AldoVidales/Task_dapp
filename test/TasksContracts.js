const TasksContract=artifacts.require("TasksContract")
contract("TasksContract",()=>{

    before(async ()=>{
        
        this.tasksContract=await TasksContract.deployed()
    })

    it('migrate deployed succssfully',async()=>{
        const address=this.tasksContract.address

        assert.notEqual(address,null);
        assert.notEqual(address,undefined);
        assert.notEqual(address,"");
        


    })

    it('get Tasks List',async()=>{
        const taskCounter=await this.tasksContract.taskCounter()
        const task=await this.tasksContract.tasks(taskCounter)

        assert.equal(task.id.toNumber(),taskCounter);
        assert.equal(task.title,"MI PRIMER TAREA DE EJEMPLO");
        assert.equal(task.description,"Tengo que hacer algo");
        assert.equal(task.done,false);
        assert.equal(taskCounter,1);
    })

    it("task created successfull",async()=>{
       const result= await this.tasksContract.createTask("some task","description two")
       const taskEvent=result.logs[0].args;
       const tasksCounter=await this.tasksContract.taskCounter()

       assert.equal(tasksCounter,2);

       assert.equal(taskEvent.id.toNumber(),2);
       assert.equal(taskEvent.title,"some task");
       assert.equal(taskEvent.description,"description two");
       assert.equal(taskEvent.done,false);

    })

})
