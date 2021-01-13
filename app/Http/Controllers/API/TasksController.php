<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\repositories\TaskRepository;

class TasksController extends Controller
{
    public $TaskRepository;
    public function __construct(TaskRepository $TaskRepository){
        $this->TaskRepository=$TaskRepository;
    }
    public function index()
    {
     $task=$this->TaskRepository->getall();
     return response()->json([
        'success'=> true,
        'message' =>'Task Details',
        'data' => $task 
     ]); 
    }
    public function show($id)
    {
        $task = $this->TaskRepository->findById($id);
        if(is_null($task)){
            return response()->json([
                'success'=> false,
                'message' =>'Task Details',
                'data' => null 
             ]);  
        }
        return response()->json([
            'success'=> true,
            'message' =>'Task Found',
            'data' => $task 
         ]); 
    }
    public function store(Request $request)
    {
        $data=$request->all();
        $validator = \Validator::make($data,[
            'name'=> 'required',
            'description'=>'required',
            'project_id'=>'required'
        ]);
        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()->first(),
                'errors' => $validator->getMessageBag(),
            ]);
        }
        $task = $this->TaskRepository->create($request);
        return response()->json([
            'success' => true,
            'message' => 'Task Stored',
            'data'    => $task,
        ]);
    }
    public function update(Request $request,$id)
    {
        $task= $this->TaskRepository->findById($id);
        if(is_null($task)){
            return response()->json([
                'success' => false,
                'message' => 'Task not found',
                'errors' =>NULL,
            ]);
        }
        $data=$request->all();
        $validator = \Validator::make($data,[
            'name'=> 'required',
            'description'=>'required',
            'status'=> 'required',
            'project_id'=>'required'
        ]);
        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()->first(),
                'errors' => $validator->getMessageBag(),
            ]);
        }
        $task = $this->TaskRepository->edit($request,$id);
        return response()->json([
            'success' => true,
            'message' => 'Task Update',
            'data'    => $task,
        ]);

    }
    public function destroy($id)
    {
        $task = $this->TaskRepository->findById($id);
        if(is_null($task)){
            return response()->json([
                'success' =>false,
                'message'=>'Data Not Found',
                'data' =>null,
            ]);
        }
        $data = $this->TaskRepository->delete($id);
        return response()->json([
            'success' => true,
            'message' => 'Task deleted',
            'data'=>$data,
        ]);
    }
}
