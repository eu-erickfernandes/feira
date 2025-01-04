<x-layout title="Produtos">
    <x-header
        title="Produtos"
    />

    <main>
        <a href="{{ route('items.create') }}">Adicionar</a>

        <ul>
            @foreach($items as $item)
                <li>{{ $item->name }} - {{ $item->category->name }}</li>
            @endforeach
        </ul>
    </main>
</x-layout>