<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('status', 1)->default(1)->comment('1: active, 0: inactive');
            $table->string('phone')->nullable();
            $table->string('username')->nullable();
            $table->unsignedBigInteger('parent_id')->default(0);
            $table->unsignedBigInteger('region_id')->nullable()->default(0);
            $table->string('code')->comment('Mã số khách hàng')->nullable();
            $table->unsignedBigInteger('department_id')->nullable()->default(0);
            $table->string('facebook_token', 5000)->nullable();
            $table->string('facebook_refresh_token', 5000)->nullable();
            $table->bigInteger('facebook_id')->nullable()->default(0);
            $table->bigInteger('google_id')->nullable()->default(0);
            $table->string('google_token', 500)->nullable();
            $table->string('google_refresh_token', 500)->nullable();
            $table->string('address', 500)->nullable();
            $table->boolean('is_change_password')->default(false);
            $table->string('reset_password', 256)->nullable();
            $table->dateTime('expiry_date')->nullable();
            $table->integer('vip')->default(0);
            $table->text('description')->nullable();
            $table->string('permission_category', 256)->nullable();
            $table->boolean('is_force_login')->default(false);
            $table->boolean('locked')->default(false);
            $table->timestamps();
        }); 
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
