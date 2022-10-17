import React, { useRef } from 'react'
import Layout from '../components/Layout';
import Image from 'next/image';
import logo from '../assets/logo.png'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LoginScreen() {
  const Router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()

    var username = event.target.username.value
    var password = event.target.password.value;

    const data = {
      username: username,
      password: password
    }

    const jsonData = JSON.stringify(data);
    const endpoint = `https://localhost:7277/${username}?password=${password}`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData,
    }
    console.log(jsonData, "jsondataaaaaa")

    const response = await fetch(endpoint, options);

    try
    {
      const result = await response.json();
      console.log(result);
      localStorage.setItem('id',result)
      Router.push('/')
    }
    catch(ex)
    {
      console.log(ex)
      alert("Wrong username or password");
    }

  }

  return (
    <Layout title="Login">
      <div className=' h-screen'>
        <div className='flex justify-center mt-10'>
          <div class="p-4 w-screen md:w-3/4 lg:w-1/2 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 ">
            <form class="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-row justify-center">
                <Image src={logo} />
              </div>
              <div>
                <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Adresa juaj elektronike</label>
                <input type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Emri i përdoruesit" required="" />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fjalëkalimi juaj</label>
                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required="" />
              </div>
              <div class="flex items-start">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                  </div>
                  <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Më mbaj mend</label>
                </div>
              <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Kyçu në llogarinë tuaj</button>
              </div>
              <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Nuk jeni të regjistruar?
                <Link href="/signup">
                  <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Krijo llogari</a>
                </Link>
              </div>
            </form>
          </div>

        </div>
      </div>
    </Layout>
  )
}