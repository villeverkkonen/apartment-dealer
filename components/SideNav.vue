<template>
    <div>
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar"
            type="button"
            class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                </path>
            </svg>
        </button>

        <aside id="default-sidebar"
            class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar">
            <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul class="space-y-2 font-medium">
                    <li>
                        <a href="#"
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                    d="M18 8.523V1a1 1 0 0 0-1-1h-3a1 1 0 0 0-.707.293L10 6.586 6.707 1.293A1 1 0 0 0 6 1H3a1 1 0 0 0-1 1v7.523L1.891 9.629a1 1 0 0 0-.754-.348 1 1 0 0 0-.754.348L0.105 9.77A1 1 0 0 0 0 10v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-9a1 1 0 0 0-.105-.23L18 8.523zM10 5.414L13.293 2H6.707L10 5.414z" />
                            </svg>
                            <span class="ms-3">Frontpage</span>
                        </a>
                    </li>
                    <li>
                        <a href="/apartments"
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                    d="M10 1L1 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5l-9-4zm2 14v-3h4v3h-4zm0-5h4v-4h-4v4zm-6 0h4v-4H6v4zm0-5h4V4L5 2v5z" />
                            </svg>
                            <span class="flex-1 ms-3 whitespace-nowrap">Apartments</span>
                        </a>

                    </li>
                </ul>
            </div>
        </aside>
    </div>
</template>
  
<script>
export default {
    name: 'SideNav',
}
</script>
  