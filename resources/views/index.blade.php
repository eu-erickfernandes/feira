<x-layout title="Home">
    <main>
        <h1>Página Inicial</h1>

        <ul>
            <li><a href="{{ route('categories.index') }}">Categorias</a></li>
            <li><a href="{{ route('items.index') }}">Produtos</a></li>
        </ul>
    </main>
</x-layout>