<?php

namespace App\Http\Controllers;

use App\Customer;
use App\Http\Requests\CreateCustomerRequest;

class CustomersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all()
    {
        $customers = Customer::all();

        return response()->json([
            'customers' => $customers,
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get($id)
    {
        $customer = Customer::whereId($id)->first();

        return response()->json([
            'customer' => $customer,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function new(CreateCustomerRequest $request)
    {
        $customer = Customer::create($request->only(['name', 'email', 'phone', 'website']));

        return response()->json([
            'customer' => $customer,
        ], 200);
    }
}
