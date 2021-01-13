<?php
namespace App\repositories;
use App\interfaces\crud;
use Illuminate\Http\Request;
use App\Models\Models\Task;


class TaskRepository implements crud{
    public function getAll(){
        $task= Task::all();
        return $task;
    }
    public function findById($id){
        $task = Task::with('project')->find($id);
        return $task;
    }
    public function create(Request $request){
        $task = new Task();
        $task->name = $request->name;
        $task->description = $request->description;
        $task->status = 0;
        $task->project_id = $request->project_id;
        $task->save();
        return $task;
    }
    public function edit(Request $request, $id){
        $task = $this->findById($id);
        $task->name = $request->name;
        $task->description = $request->description;
        $task->status = $request->status;
        $task->project_id = $request->project_id;
        $task->save();
        return $task;

    }
    public function delete($id){
        $data = $this->findById($id);
        $data->delete();
        return $data;
    }
}
?>