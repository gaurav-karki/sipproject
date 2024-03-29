from django.contrib import messages
from django.shortcuts import render, redirect
from .forms import UserRegisterForm


def signup(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account has been created for {username}!')
            return redirect('login')
    else:
        form = UserRegisterForm()
    return render(request, 'user/templates/signup.html', {'form': form})
