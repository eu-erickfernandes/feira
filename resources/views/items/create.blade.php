<x-layout title="Adicionar Produto">
    <x-header
        title="Adicionar Produtos"
    />

    <main>
        <form action="{{ route('items.store') }}" method="post">
            @csrf

            <div>
                <label for="name">Nome</label>
                <input type="text" name="name" id="name" required>
            </div>

            <div>
                <label for="category">Categoria</label>

                <select name="category" id="category" required>
                    @foreach($categories as $category)
                        <option value="{{ $category->id }}">{{ $category->name }}</option>
                    @endforeach
                </select>
            </div>

            <button type="submit">Adicionar</button>
        </form>
    </main>
</x-layout>