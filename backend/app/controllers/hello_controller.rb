class HelloController < ApplicationController
  def show
    render plain: "Hello, #{params[:name]}"
  end
end
