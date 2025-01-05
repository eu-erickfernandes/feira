<x-layout title="Lojas">
    <x-header
        title="Lojas"
    />

    <main>
        <a href="{{ route('stores.create') }}">Adicionar</a>
        
        <ul>
            @foreach($stores as $store)
                <li>{{ $store->name }}</li>
            @endforeach
        </ul>
    </main>
</x-layout>