<x-layout title="Categorias">
    <x-header
        title="Categorias"
    />

    <main>
        <a href="{{ route('categories.create') }}">Adicionar</a>
        
        <ul>
            @foreach($categories as $category)
                <li>{{ $category->name }}</li>
            @endforeach
        </ul>
    </main>
</x-layout>